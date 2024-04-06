"use client";
import { useState } from "react";

type Props = {
    sum: number;
    view: boolean;
  };
  
  export const Sample = ({ sum, view }: Props) => {
    const [isView, setIsView] = useState(view);

    const onClickView = () => {
      setIsView(!isView);
    };
  
    return (
      <>
      <div className="bg-blue-500 font-bold">{sum}</div>

<button onClick={onClickView}>
  表示/非表示
</button>

{isView ? (
          <div>表示されているところ</div>
        ) : (
          <div>表示されていないところ</div>
        )}
      </>
    );
  };