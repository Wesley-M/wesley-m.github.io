import Card from "../../shared/Card";

function WorkCard({ img, title, description, tags }) {

    return (
        <Card
            imgSrc="https://picsum.photos/300/300"
            title={title}
            description={description}
            tags={tags}
        />
    )
}

export default WorkCard