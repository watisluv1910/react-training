import React from 'react';
import styles from './styles.scss';


// const onClickEvent = (e) => {
//     e.preventDefault();
//     alert('You Clicked The Test Button');
// };

const App = () => {
    return (
        <p>Component App</p>
    );
};

const News = () => {
    return <p>К сожалению, новостей нет</p>;
};


/**
 * Represents a BigApp component.
 */
// eslint-disable-next-line no-unused-vars
class BigApp extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Component BigApp</h1>
                <p className={styles.red}>
                    Компоненты можно вкладывать друг в друга
                </p>
                <App/>
                <News/>
            </React.Fragment>
        );
    };
};

export default BigApp;
