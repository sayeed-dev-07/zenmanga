import React, { useContext } from 'react';
import { Link } from 'react-router';
import DataContext from './DataContext';

const TagsButton = ({ element }) => {
    const {setTags} = useContext(DataContext)
    function color(elem) {
        switch (elem) {
            case 'Shōnen':
                return '#c1121f';
            case 'Adventure':
                return '#264653';
            case 'Fantasy':
                return '#94d2bd';
            case 'Action':
                return '#9a031e';
            case 'Comedy':
                return '#ffb703';
            case 'Science Fiction':
                return '#219ebc';
            case 'Horror':
                return '#344e41';
            case 'Psychological Thriller':
                return '#dad7cd';
            case 'Supernatural Thriller':
                return '#bc6c25';
            case 'Mystery':
                return '#003049';
            default:
                return '#4a5759';
        }
    }
    function getTextColor(hex) {
        const c = hex.substring(1);
        const rgb = parseInt(c, 16);
        const r = (rgb >> 16) & 255;
        const g = (rgb >> 8) & 255;
        const b = rgb & 255;

        // luminance formula
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

        return luminance > 0.5 ? "black" : "white";
    }
    let colCode = color(element)
    const textColor = getTextColor(colCode);

    return (
        <Link onClick={()=> setTags(element)} style={{ backgroundColor: colCode, color: textColor }} className={`px-2 py-1 text-sm rounded-md`} to={`/all-manga/tags/${element}`}>{element}
        </Link>
    );
};

export default TagsButton;