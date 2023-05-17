import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import {ReactComponent as List} from "../../../assets/icons/listSolid.svg";
import {ReactComponent as Tile} from "../../../assets/icons/tile.svg";

interface IButtonSelect {
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
  selected: boolean;
}

export const ButtonSelect: React.FC<IButtonSelect> = ({ selected, setSelected }) => {
  return (
    <>
      <ToggleButton
      sx={{width: "40px", height: "40px", zIndex: "1000", padding: "4px"}}
        color="primary"
        value="check"
        selected={selected}
        onChange={() => {
          localStorage.setItem(
            'content',
            JSON.stringify(!selected))
          setSelected(!selected);
        }}
      >
        {selected ? <Tile width="40px" height="40px" className="fillSvg" /> : <List  width="40px" height="40px" />}
      </ToggleButton>
    </>
  );
};
