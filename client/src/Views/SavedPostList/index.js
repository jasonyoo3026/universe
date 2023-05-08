import React from "react";

const SavedPostList = () => {
    const renderSavedPosts = () => {
        return <p style={{ marginTop: "1.5rem" }}>Your saved post list is empty at the moment!</p>;
    };
    return (
        <>
            <main className="saved-posts-container">
                {renderSavedPosts()}
            </main>
        </>
    );
}

export default SavedPostList;
