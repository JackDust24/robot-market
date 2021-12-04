import { Button, Form, InputGroup } from "react-bootstrap";
import React, { useState } from "react";

const iconStyle = {
  backgroundColor: `#33dd5e`,
  borderRadius: `0 10px 10px 0`,
  fontSize: `34px`,
  color: `#ffffff`,
  border: `3px solid #000000`,
  width: `60px`,
  maxHeight: `60px`,
  paddingLeft: `5px`,
};

const MaterialSearch = (props) => {
  const [value, setValue] = useState(0);
  const { materials, handleSelectMaterial, handleMaterialReset } = props;

  return (
    <React.Fragment>
      <div className="material-search">
        <div style={{ marginRight: `30px` }}>
          {materials && (
            <Form className="search-material-form search-bar">
              <InputGroup className="search-bar">
                <Form.Group controlId="exampleForm.SelectMaterial">
                  <Form.Select
                    as="select"
                    className="search-select"
                    onChange={(e) => {
                      handleSelectMaterial(e.target.value);
                      setValue(e.target.value);
                    }}
                    value={value}
                    size="lg"
                  >
                    <option value="0">Choose Material...</option>
                    {materials.map((material) => (
                      <option key={material} value={material}>
                        {material}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </InputGroup>
            </Form>
          )}
        </div>
        <Button
          onClick={() => {
            setValue(0);
            handleMaterialReset(true);
          }}
        >
          Reset
        </Button>
      </div>
    </React.Fragment>
  );
};

export default MaterialSearch;
