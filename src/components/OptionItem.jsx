function OptionItem({ itemName, itemFunction }) {
    return (
        <>
            <p
                className="w-full hover:bg-neutral-100 py-2 px-4 cursor-pointer"
                onClick={itemFunction()}
            >
                {itemName}
            </p>
        </>
    );
}

export default OptionItem;
