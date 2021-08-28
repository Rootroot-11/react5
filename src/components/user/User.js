export default function User({item}) {
    return (
        <div>
            {item.id} -
            {item.name} -
            {item.username} -
            {item.email}
        </div>
    );
}