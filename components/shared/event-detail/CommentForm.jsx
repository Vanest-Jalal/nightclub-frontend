const CommentForm = () => {
    return (
        <form>
            <input
            type="text"
            name="name"
            placeholder="Your Name"
            required 
            />

            <input
            type="email"
            name="email"
            placeholder="Your Email"
            required 
            />

            <textarea
            name="content"
            placeholder="Your Comment"
            required
            />

            <button type="submit">
                SUBMIT
            </button>
            
        </form>
        



    )
}

export default CommentForm;
