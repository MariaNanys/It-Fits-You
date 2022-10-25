import { useEffect, useState } from 'react';
import { Burger } from '@mantine/core';
import React from "react";  
import "./Burger.scss";

export function BurgerButton({ onChange, update }) {
  const [opened, setOpened] = useState(false);
  
  useEffect(() => {
    setOpened(update);
  }, [update]);

  const title = opened ? 'Close navigation' : 'Open navigation';
    function handleClick(e) {
        setOpened(e);
        onChange(!opened);
    }

  return (
    <Burger
    className="Burger__menu"
      opened={opened}
      onClick={() => handleClick((o) => !o)}
      title={title}
    />
  );
}