import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';

import { showFormattedDate } from '../utils';

const NoteItem = ({ id, title, createdAt, body, archived, onDelete, onArchive }) => {
    return (
        <article className="note-item">
            <h3 className="note-item__title">
                <Link to={`/notes/${id}`}>{title}</Link>
            </h3>
            <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
            <p className="note-item__body">{parser(body)}</p>
            <div className="note-item__action">
                <button className="note-item__delete-button" onClick={() => onDelete(id)}>
                    Hapus
                </button>
                <button className="note-item__archive-button" onClick={() => onArchive(id)}>
                    {archived ? 'Aktifkan' : 'Arsipkan'}
                </button>
            </div>
        </article>
    );
};

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
};

export default NoteItem;
