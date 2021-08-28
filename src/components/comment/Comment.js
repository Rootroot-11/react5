export default function Comment({item}) {
    return (
        <div>
            {item.id}
            {item.name}
            {item.email}
            {item.body}
        </div>
    );
}