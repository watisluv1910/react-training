import React from 'react';
import styles from './styles.scss';


const App = () => {
    return (
        <p>Component App</p>
    );
};

const News = () => {
    startTicking();
    return <p>К сожалению, новостей нет</p>;
};


/**
 * Represents a BigApp component.
 */
class BigApp extends React.Component {
    /**
     * Renders a component
     * @return { Component }
     */
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
