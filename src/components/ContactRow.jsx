function ContactRow({ contact, setSelectedContactId}) {
    const { id, name, phone, email } = contact;
    return (
        <tr onClick={() => setSelectedContactId (id)}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
        </tr>
    );
}

export default ContactRow;