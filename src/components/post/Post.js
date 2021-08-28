export default function Post({item}) {
    return (
        <div>
            {item.id}
            {item.title}
            {item.body}
        </div>
    );
}