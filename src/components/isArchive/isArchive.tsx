import React, { useEffect, useState } from 'react';
import { ReactComponent as Load } from '../../assets/icons/loading.svg';
import axios from 'axios';
import './isArchive.scss';


interface IIsArchive {
  url: string;
}

export const IsArchive: React.FC<IIsArchive> = ({ url }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try{
    axios.get(url).then(() => {
        setIsDisabled(true);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setIsDisabled(false);
      });

}catch(err){console.log(err)}}, [url]);
  if (loading) {
    return <Load width="25px" height="25px" />;
  }
  return (
    <>
      {isDisabled ? <div className="archive">актуальный</div> : <div style={{color: "grey"}}>удален</div>}
    </>
  );
};
