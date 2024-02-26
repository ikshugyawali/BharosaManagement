export default function NewLineToBr({ children = "" }) {
    return children.split('\n').reduce(function (arr, line, index) {
        const key = `line-${index}-${line}`;
        return arr.concat(
            <span key={key}>{line}</span>,
            <br key={index} />
        );
    }, []);
}
