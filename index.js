import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;

const reversedSentence = markdown.split(' ').reverse().join(' ');
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
console.log(capitalizedSentence);

data.forEach((group) => {
    group.forEach((person) => {
        console.log(person.name);
    });
});

const data = [
    [
        { name: 'John' },
        { name: 'Jane' },
        { name: 'Mike' }
    ],
    [
        { name: 'Alice' },
        { name: 'Bob' },
        { name: 'Eve' }
    ]
];

data.forEach((group) => {
    group.forEach((person) => {
        console.log(person.name);
    });
});

// Map through an array of arrays of objects
  // Example: Extract names from the data array
  // Desired outcome: ['John', 'Jane', 'Bob']
const names = data.map((group) => {
    return group.map((person) => {
        return person.name;
    });