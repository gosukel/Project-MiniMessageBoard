const colors = [
    "#77BEF0",
    "#FFCB61",
    "#FF894F",
    "#EA5B6F",
    "#113F67",
    "#93DA97",
    "#CC66DA",
    "#898AC4",
];

let messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
        color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
        color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
        text: "Welcome to the world of POKeMON!",
        user: "Oak",
        added: new Date(),
        color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
        text: "You're a wizard, Harry!",
        user: "Hagrid",
        added: new Date(),
        color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
        text: "A wizard is never late...",
        user: "Gandalf",
        added: new Date(),
        color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
        text: "I know...",
        user: "Han",
        added: new Date(),
        color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
        text: "Make it so!",
        user: "Jean-Luc",
        added: new Date(),
        color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
        text: "The best way out is always through.",
        user: "Robert",
        added: new Date(),
        color: colors[Math.floor(Math.random() * colors.length)],
    },
];

export default messages;
export { colors };
