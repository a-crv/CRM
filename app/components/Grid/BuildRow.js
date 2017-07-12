import React from 'react';
import { Link } from 'react-router-dom';

import Helpers from 'helpers';

import Row from './Row';
import Cell from './Cell';

export default (fields, row, rowIndex) => (
  <Row key={`row${rowIndex}`}>
    {
      fields.map((field, cellIndex) => {
        if (field.mapping === 'imageUrl') {
          const url = Helpers.mapping(field.mapping, row);

          if (!url.indexOf('https://s3.amazonaws.com')) {
            return (
              <Cell
                className={field.className}
                key={`cell${cellIndex}`}
                children={
                  <Link
                    className="table-data__show-image"
                    target="_blank"
                    to={{
                      pathname: url
                    }}
                  >
                    Show
                  </Link>
                }
              />
            );
          }
        }

        return (
          <Cell
            className={field.className}
            key={`cell${cellIndex}`}
            text={Helpers.mapping(field.mapping, row)}
          />
        );
      })
    }
  </Row>
);
