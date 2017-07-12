import React from 'react';

import Header from './Header';
import Row from './Row';
import Cell from './Cell';

export default fields => (
  <table>
    <Header>
      <Row>
        {
          fields.map((field, index) => <Cell
            text={field.name}
            className={field.className || null}
            key={`th${index}`}
          />)
        }
      </Row>
    </Header>
  </table>
);
