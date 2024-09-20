import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Items from './Items';

function Tablar({ todos, handleFavourite, handleEdit, handleDelete }) {
    const favourites = todos.filter(todo => todo.isFavourite);

    return (
        <div className="container mt-5">
            <div className="row">
                <Tabs
                    defaultActiveKey="all"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                    variant="pills"
                >
                    <Tab eventKey="all" title="All">
                        {todos.length > 0 ? (
                            todos.map((todo, index) => (
                                <Items
                                    key={index}
                                    {...todo}
                                    handleFavourite={() => handleFavourite(index)}
                                    handleEdit={() => handleEdit(index)}
                                    handleDelete={() => handleDelete(index)}
                                />
                            ))
                        ) : (
                            <p>No todos available</p>
                        )}
                    </Tab>
                    <Tab eventKey="favourites" title="Favourites">
                        {favourites.length > 0 ? (
                            favourites.map((todo, index) => (
                                <Items
                                    key={index}
                                    {...todo}
                                    handleFavourite={() => handleFavourite(index)}
                                    handleEdit={() => handleEdit(index)}
                                    handleDelete={() => handleDelete(index)}
                                />
                            ))
                        ) : (
                            <p>No favourites yet</p>
                        )}
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default Tablar;
