import {
    ListItem,
} from '@chakra-ui/react';

export default function NewListToBr({ children = "" }) {
    return children.split('\n').reduce(function (arr, line) {
        return arr.concat(
            <ListItem>{line}</ListItem>,
        );
    }, []);
}
