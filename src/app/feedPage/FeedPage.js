import React, { Component } from 'react';
import CreateNewPost from "./CreateNewPost"
import NewTextPost from "./NewTextPost"
import NewImagePost from "./NewImagePost"
import NewVideoPost from "./NewVideoPost"



class FeedPage extends Component {

    componentDidMount() {

    }

    render() {
        return (

            <div>
                <CreateNewPost />
                <NewTextPost />
                <NewImagePost />
                <NewVideoPost />
            </div>

        );
    }
}

export default FeedPage;