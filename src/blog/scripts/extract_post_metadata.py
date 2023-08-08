"""
Script being used to pre-process post markdowns, by extracting and
structuring metadata.
"""

import json
from functools import cmp_to_key
from os import listdir, path
import readtime
import glob
import sys

args = sys.argv

if (len(args) < 2):
    print("Pass the posts folder")
    exit(1)

writing_folder = args[1]

posts_path = '../posts'
original_posts_path = f'{posts_path}/{writing_folder}'
render_posts_path = f'{posts_path}/render'

post_filepaths = glob.glob(f'{original_posts_path}/*.md')
post_filenames = map(lambda p : p.split('/')[-1], post_filepaths)

posts_metadata = []

def write_file_without_metadata(old_path, new_path, filename, post_title):
    # list to store file lines
    lines = []

    # Delimiter for start and end of the header
    header_delimiter = '---'

    # How many times the delimiter occurs
    header_delimiter_ct = 0

    # read file
    with open(f"{old_path}/{filename}") as fp:
        # read and store all lines into list
        lines = fp.readlines()

    after_header = False
    
    # Write file
    with open(f"{new_path}/{filename}", 'w+') as fp:
        fp.write(f"# {post_title}")

        # iterate each line
        for idx, line in enumerate(lines):
            if not after_header:
                if header_delimiter in line:
                    header_delimiter_ct += 1
                    # In case you found the start and end
                    if header_delimiter_ct >= 2:
                        after_header = True
            else:
                fp.write(line)
    
    return " ".join(lines)

def add_readtime_estimation(post_metadata, content):
    post_metadata["readtime"] = readtime.of_markdown(content).text

def get_file_metadadata(p, filename):
    # Delimiter for start and end of the header
    header_delimiter = '---'

    # How many times the delimiter occurs
    header_delimiter_ct = 0

    # The property delimiter
    prop_delimiter = ':'

    # The actual header
    header = {}

    # Default header
    header['author'] = 'Wesley Santos'
    header['path'] = filename
    header['last_updated'] = int(path.getctime(f'{p}/{filename}'))

    last_prop = ''

    with open(f"{p}/{filename}") as f:
        content = f.readlines()

        for line in content:
            if header_delimiter in line:
                header_delimiter_ct += 1
                # In case you found the start and end
                if header_delimiter_ct >= 2:
                    break
            else:    
                prop_value = line.split(prop_delimiter, 1)
                
                # In case it's a not a property, it means we are continuing 
                # the value of the last prop
                if len(prop_value) < 2:
                    header[last_prop] = " ".join([
                        header[last_prop], 
                        prop_value[0].replace('\n','')
                    ])
                else:
                    header[prop_value[0]] = prop_value[1].strip().replace('\n','')
                    last_prop = prop_value[0]

    return header

# All the current metadata from the posts
for filename in post_filenames:
    post_metadata = get_file_metadadata(original_posts_path, filename)

    if not 'title' in post_metadata:
        raise Exception("There is a post without title")
    
    if not 'description' in post_metadata:
        raise Exception("There is a post without description")

    post_content = write_file_without_metadata(original_posts_path, render_posts_path, filename, post_metadata['title'])

    # Estimate readtime and adding to metadata
    add_readtime_estimation(post_metadata, post_content)

    posts_metadata.append(post_metadata)

posts = { 
    'content': {},
    'index': {}
}

# Formatting JSON to write
for idx, post in enumerate(posts_metadata):
    filepath = post['path']
    url_id = filepath.split(".")[0]
    posts['content'][url_id] = post
    posts['index'][post['title']] = url_id

with open(f'{posts_path}/metadata.json', 'w') as f:
    json.dump(posts, f, indent=4)
