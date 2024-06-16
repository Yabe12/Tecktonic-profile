import React from 'react';
import Question from '../../component/cards/Question/Question';
import Wellcome1 from '../../component/cards/Wellcome1/Wellcome1';
import styles from './QuestionPage.module.css';
import SideBar from '../../component/bars/SideBar/SideBar';

export default function QuestionPage() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.Sidebar}><SideBar /></div>
                <div className={styles.questionPageContainer}>
                    <div className={styles.imageNavigation}>
                        <a href="#html-section">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                                alt="HTML Questions"
                                className={styles.navigationImage}
                            />
                        </a>
                        <a href="#css-section">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png"
                                alt="CSS Questions"
                                className={styles.navigationImage}
                            />
                        </a>
                        <a href="#react-section">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png"
                                alt="React Questions"
                                className={styles.navigationImage}
                            />
                        </a>
                        <a href="#database-section">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/9850/9850774.png"
                                alt="Database Questions"
                                className={styles.navigationImage}
                            />
                        </a>
                    </div>

                    <div className={styles.total}>
                        <div className={styles.well}>
                            <Wellcome1
                                className={styles.title}
                                title="WELCOME TO HTML QUESTIONS ✨"
                                image="https://cdn-icons-png.flaticon.com/128/743/743217.png"
                            />
                        </div>
                        <div>
                            <div id="html-section" className={styles.htmlcard}>
                                <div className={styles.question0}>
                                    <div className={styles.question1}>

                                        <Question
                                            frontTitle=""
                                            frontText="👉 1. What is HTML's role in web development?"
                                            backText="HTML provides structure for web content and interacts with CSS and JavaScript. It has evolved from HTML 1.0 to HTML5, impacting layout, accessibility, and SEO. Challenges include cross-browser compatibility. Modern frameworks like React influence its usage."
                                        />
                                    </div>
                                    <div className={styles.question2}>

                                        <Question
                                            frontTitle=""
                                            frontText="👉2 What is HTML's role in web development?"
                                            backText="HTML provides structure for web content and interacts with CSS and JavaScript. It has evolved from HTML 1.0 to HTML5, impacting layout, accessibility, and SEO. Challenges include cross-browser compatibility. Modern frameworks like React influence its usage."
                                        />
                                    </div>

                                </div>

                                <div className={styles.question0}>
                                    <div className={styles.question1}>
                                        <Question
                                            frontTitle=""
                                            frontText="👉2. How do HTML elements and attributes function in web development?"
                                            backText="HTML elements like `<div>` and `<p>` define content structure, while attributes like `id` and `class` specify properties. HTML integrates multimedia and facilitates page linking, ensuring accessibility and SEO."
                                        />
                                    </div>
                                    <div className={styles.question2}>
                                        <Question
                                            frontTitle=""
                                            frontText="👉2. How do HTML elements and attributes function in web development?"
                                            backText="HTML elements like `<div>` and `<p>` define content structure, while attributes like `id` and `class` specify properties. HTML integrates multimedia and facilitates page linking, ensuring accessibility and SEO."
                                        />
                                    </div>

                                </div>

                                <div className={styles.question0}>
                                    <div className={styles.question1}>
                                        <Question
                                            frontTitle=""
                                            frontText="👉3. How do you create hyperlinks in HTML, and what are the best practices?"
                                            backText="Use the `<a>` tag with the `href` attribute for URLs. Descriptive text aids accessibility. Anchor links with `id` attributes enable page navigation. CSS styles links. Best practices include clear link text and proper testing."
                                        />
                                    </div>
                                    <div className={styles.question2}>
                                        <Question
                                            frontTitle=""
                                            frontText="👉3. How do you create hyperlinks in HTML, and what are the best practices?"
                                            backText="Use the `<a>` tag with the `href` attribute for URLs. Descriptive text aids accessibility. Anchor links with `id` attributes enable page navigation. CSS styles links. Best practices include clear link text and proper testing."
                                        />
                                    </div>

                                </div>

                                <div className={styles.question0}>
                                    <div className={styles.question1}>
                                        <Question
                                            frontTitle=""
                                            frontText="👉4. What is a semantic HTML element, and why is it important?"
                                            backText="Semantic elements like `<header>` and `<footer>` provide meaningful content context, aiding accessibility and SEO. They enhance code readability and maintainability, best used appropriately."
                                        />
                                    </div>
                                    <div className={styles.question2}>
                                        <Question
                                            frontTitle=""
                                            frontText="👉4. What is a semantic HTML element, and why is it important?"
                                            backText="Semantic elements like `<header>` and `<footer>` provide meaningful content context, aiding accessibility and SEO. They enhance code readability and maintainability, best used appropriately."
                                        />
                                    </div>

                                </div>

                                <div className={styles.question0}>
                                    <div className={styles.question1}>
                                        <Question
                                            frontTitle=""
                                            frontText="👉5. How do HTML attributes enhance element functionality?"
                                            backText="Attributes like `id` and `class` modify element behavior and appearance. Best practices include using semantic attributes and ensuring accessibility."
                                        />
                                    </div>
                                    <div className={styles.question2}>
                                        <Question
                                            frontTitle=""
                                            frontText="👉5. How do HTML attributes enhance element functionality?"
                                            backText="Attributes like `id` and `class` modify element behavior and appearance. Best practices include using semantic attributes and ensuring accessibility."
                                        />
                                    </div>


                                </div>

                            </div>
                        </div>

                            <div className={styles.well}>
                                <Wellcome1
                                    title="WELCOME TO CSS QUESTIONS ✨"
                                    image="https://cdn-icons-png.flaticon.com/128/982/982997.png"
                                />
                            </div>
                        <div id="css-section" className={styles.csscard}>
                            <div>
                                <div className={styles.question0}>
                                    <div className={styles.question1}>            <Question
                                        frontTitle=""
                                        frontText="⭐1. What is CSS, and why is it important in web development?"
                                        backText="CSS stands for Cascading Style Sheets, a language used to style HTML documents. It allows developers to control layout, typography, colors, and more, separating content and presentation."
                                    /></div>
                                    <div className={styles.question2}>             <Question
                                        frontTitle=""
                                        frontText="⭐1. What is CSS, and why is it important in web development?"
                                        backText="CSS stands for Cascading Style Sheets, a language used to style HTML documents. It allows developers to control layout, typography, colors, and more, separating content and presentation."
                                    />
                                    </div>

                                </div>
                                <div className={styles.question0}>
                                    <div className={styles.question1}><Question
                                        frontTitle=""
                                        frontText="⭐2. How does the cascading mechanism work in CSS, and what impact does it have on styling?"
                                        backText="In CSS, the cascading mechanism resolves conflicts in style rules based on specificity and order, allowing inheritance and overriding."
                                    /></div>
                                    <div className={styles.question2}><Question
                                        frontTitle=""
                                        frontText="⭐2. How does the cascading mechanism work in CSS, and what impact does it have on styling?"
                                        backText="In CSS, the cascading mechanism resolves conflicts in style rules based on specificity and order, allowing inheritance and overriding."
                                    /></div>

                                </div>

                                <div className={styles.question0}>
                                    <div className={styles.question1}>
                                        <Question
                                            frontTitle=""
                                            frontText="⭐3. What are the advantages of using CSS in web development?"
                                            backText="CSS improves code maintainability by separating content and presentation, making updates easier. It also enhances efficiency in styling multiple elements and offers global or targeted styling."
                                        />
                                    </div>
                                    <div className={styles.question2}>
                                        <Question
                                            frontTitle=""
                                            frontText="⭐3. What are the advantages of using CSS in web development?"
                                            backText="CSS improves code maintainability by separating content and presentation, making updates easier. It also enhances efficiency in styling multiple elements and offers global or targeted styling."
                                        />
                                    </div>

                                </div>

                                <div className={styles.question0}>
                                    <div className={styles.question1}>
                                        <Question
                                            frontTitle=""
                                            frontText="⭐4. How does CSS affect the presentation of HTML documents?"
                                            backText="CSS controls layout by positioning elements and dictates typography, colors, and visual aspects. It adds decorative effects like borders and shadows."
                                        />
                                    </div>
                                    <div className={styles.question2}>
                                        <Question
                                            frontTitle=""
                                            frontText="⭐4. How does CSS affect the presentation of HTML documents?"
                                            backText="CSS controls layout by positioning elements and dictates typography, colors, and visual aspects. It adds decorative effects like borders and shadows."
                                        />
                                    </div>

                                </div>

                                <div className={styles.question0}>
                                    <div className={styles.question1}>
                                        <Question
                                            frontTitle=""
                                            frontText="⭐5. How does CSS contribute to user experience and consistency in web design?"
                                            backText="CSS enables responsive designs for different devices, improving usability and accessibility. It maintains consistency in design elements and branding across devices, enhancing the user experience."
                                        />
                                    </div>
                                    <div className={styles.question2}><Question
                                        frontTitle=""
                                        frontText="⭐5. How does CSS contribute to user experience and consistency in web design?"
                                        backText="CSS enables responsive designs for different devices, improving usability and accessibility. It maintains consistency in design elements and branding across devices, enhancing the user experience."
                                    /></div>

                                </div>


                            </div>..
                        </div>

                            <div className={styles.well}>
                                <Wellcome1
                                    title="WELCOME TO REACT QUESTIONS ✨"
                                    image="https://cdn-icons-png.flaticon.com/128/1791/1791307.png"
                                />
                            </div>
                        <div id="react-section" className={styles.reactcard}>
                            <div>
                                <div className={styles.question0}>
                                    <div className={styles.question1}> <Question
                                        frontText="🌠1. What is React, and why is it significant in web development?"
                                        backText="React is a JavaScript library for building user interfaces. It promotes reusable and modular code through its component-based architecture, enhancing developer productivity."
                                    /></div>
                                    <div className={styles.question2}> <Question
                                        frontText="🌠1. What is React, and why is it significant in web development?"
                                        backText="React is a JavaScript library for building user interfaces. It promotes reusable and modular code through its component-based architecture, enhancing developer productivity."
                                    /></div>

                                </div>

                                <div className={styles.question0}>
                                    <div className={styles.question1}> <Question
                                        frontText="🌠2. How do components contribute to user interface development in React?"
                                        backText="Components in React are reusable building blocks that encapsulate UI elements and logic, making it easier to manage complex applications. They enable the composition of smaller, reusable pieces into larger UI structures."
                                    /></div>
                                    <div className={styles.question2}> <Question
                                        frontText="🌠2. How do components contribute to user interface development in React?"
                                        backText="Components in React are reusable building blocks that encapsulate UI elements and logic, making it easier to manage complex applications. They enable the composition of smaller, reusable pieces into larger UI structures."
                                    /> </div>

                                </div>

                                <div className={styles.question0}>
                                    <div className={styles.question1}><Question
                                        frontText="🌠3. What is JSX, and how does it simplify React development?"
                                        backText="JSX is a syntax extension for JavaScript used in React development to write HTML-like code within JavaScript files. It simplifies the definition of UI components and their behavior by providing a familiar syntax for developers."
                                    /></div>
                                    <div className={styles.question2}><Question
                                        frontText="🌠3. What is JSX, and how does it simplify React development?"
                                        backText="JSX is a syntax extension for JavaScript used in React development to write HTML-like code within JavaScript files. It simplifies the definition of UI components and their behavior by providing a familiar syntax for developers."
                                    /></div>

                                </div>

                                <div className={styles.question0}>
                                    <div className={styles.question1}><Question
                                        frontText="🌠4. What is 'state' in React, and how is it utilized?"
                                        backText="'State' in React refers to the data that determines a component's behavior and appearance. Local component state is used to manage dynamic data and UI interactions, allowing components to respond to changes and re-render as needed."
                                    /></div>
                                    <div className={styles.question2}><Question
                                        frontText="🌠4. What is 'state' in React, and how is it utilized?"
                                        backText="'State' in React refers to the data that determines a component's behavior and appearance. Local component state is used to manage dynamic data and UI interactions, allowing components to respond to changes and re-render as needed."
                                    /></div>


                                </div>
                                <div className={styles.question0}>
                                    <div className={styles.question1}><Question
                                        frontText="🌠5. How do props facilitate communication between components in React?"
                                        backText="Props allow parent components to pass data down to child components, enabling component composition and reusability. They enable customization of component behavior and appearance by passing data or functions from parent to child."
                                    /></div>
                                    <div className={styles.question2}>
                                        <Question
                                            frontText="🌠5. How do props facilitate communication between components in React?"
                                            backText="Props allow parent components to pass data down to child components, enabling component composition and reusability. They enable customization of component behavior and appearance by passing data or functions from parent to child."
                                        />
                                    </div>


                                </div>

                            </div>
                        </div>

                            <div className={styles.well}>
                                <Wellcome1
                                    title="WELCOME TO DATABASE QUESTIONS ✨"
                                    image="https://cdn-icons-png.flaticon.com/128/8944/8944490.png"
                                />
                            </div>
                        <div id="database-section" className={styles.databasecard}>
                            <div>
                                <div className={styles.question0}>
                                    <div className={styles.question1}>
                                        <Question
                                            frontText="🌟1. What is a database, and what role does it play in computing?"
                                            backText="A database is a structured collection of data used for efficient storage, retrieval, and manipulation. It serves various industries and faces challenges in design, implementation, and maintenance."
                                        /></div>
                                    <div className={styles.question2}>
                                        <Question
                                            frontText="🌟1. What is a database, and what role does it play in computing?"
                                            backText="A database is a structured collection of data used for efficient storage, retrieval, and manipulation. It serves various industries and faces challenges in design, implementation, and maintenance."
                                        /></div>

                                </div>

                                <div className={styles.question0}>
                                    <div className={styles.question1}><Question
                                        frontText="🌟2. What is SQL, and how is it used in database management?"
                                        backText="SQL (Structured Query Language) is a domain-specific language for managing relational databases. It facilitates querying, updating, and managing database data, defining schema, and ensuring data integrity."
                                    /></div>
                                    <div className={styles.question2}><Question
                                        frontText="🌟2. What is SQL, and how is it used in database management?"
                                        backText="SQL (Structured Query Language) is a domain-specific language for managing relational databases. It facilitates querying, updating, and managing database data, defining schema, and ensuring data integrity."
                                    /></div>


                                </div>
                                <div className={styles.question0}>
                                    <div className={styles.question1}><Question
                                        frontText="🌟3. What is a primary key, and why is it important in databases?"
                                        backText="A primary key uniquely identifies each record in a table, ensuring data integrity and consistency. Its choice impacts indexing, performance, and normalization in database design."
                                    /></div>
                                    <div className={styles.question2}><Question
                                        frontText="🌟3. What is a primary key, and why is it important in databases?"
                                        backText="A primary key uniquely identifies each record in a table, ensuring data integrity and consistency. Its choice impacts indexing, performance, and normalization in database design."
                                    /></div>

                                </div>
                                <div className={styles.question0}>
                                    <div className={styles.question1}><Question
                                        frontText="🌟4. What is a foreign key, and how does it relate to database relationships?"
                                        backText="A foreign key establishes relationships between tables, ensuring referential integrity and supporting cascading updates and deletes. Its use impacts data manipulation and query performance."
                                    /></div>
                                    <div className={styles.question2}><Question
                                        frontText="🌟4. What is a foreign key, and how does it relate to database relationships?"
                                        backText="A foreign key establishes relationships between tables, ensuring referential integrity and supporting cascading updates and deletes. Its use impacts data manipulation and query performance."
                                    />
                                    </div>

                                </div>

                                <div className={styles.question0}>
                                    <div className={styles.question1}><Question
                                        frontText="🌟5. What is normalization, and why is it essential in database design?"
                                        backText="Normalization organizes data to reduce redundancy and dependency, ensuring data integrity and eliminating anomalies. It involves achieving various normal forms and offers benefits like improved consistency and reduced storage requirements."
                                    /></div>
                                    <div className={styles.question2}><Question
                                        frontText="🌟5. What is normalization, and why is it essential in database design?"
                                        backText="Normalization organizes data to reduce redundancy and dependency, ensuring data integrity and eliminating anomalies. It involves achieving various normal forms and offers benefits like improved consistency and reduced storage requirements."
                                    /></div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
