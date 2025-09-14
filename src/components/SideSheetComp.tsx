import { Button, Inline, SideSheetContainer, SideSheetContext, Typography, type SideSheetContentProps } from "@elsevier/graphene";
import React from "react";
import { useContext } from "react";
export default function SideSheetComp (){
  return (
      <SideSheetContainer>
        <ExampleContent />
      </SideSheetContainer>
  );
};

const ExampleContent = () => {
    const context = useContext(SideSheetContext);
    React.useEffect(() => context.setSideSheet(hobbitItems), []);
    return (
      <Inline horizontalAlignment="stretch" width="100%">
        <Button
          label={context.isOpen ? 'Close side sheet' : 'Open side sheet'}
          variant="primary"
          onClick={() => context.setIsOpen((prev) => !prev)}
        />
        <Inline spacing="8dp">
          <Button label="Hobbit items" variant="secondary" onClick={() => context.setSideSheet(hobbitItems)} />
          <Button label="Silmarillion items" variant="secondary" onClick={() => context.setSideSheet(silmarillionItems)} />
        </Inline>
      </Inline>
    );
};

const hobbitItems: SideSheetContentProps = {
  mainTitle: 'Hobbit items',
  children: (
    <div style={{ padding: '16px', width: '100%', boxSizing: 'border-box' }}>
      <Typography fontSize={16}>
        Explore even more treasures from Middle-earth:
        <ul>
          <li>Gandalf's Staff, a powerful artifact imbued with ancient magic.</li>
          <li>Aragorn's Ranger Cloak, a durable and weather-resistant cloak for long journeys.</li>
          <li>Legolas' Bow, an elegant and precise weapon crafted by the Elves.</li>
          <li>Gimli's Axe, a sturdy and reliable tool for both battle and craftsmanship.</li>
          <li>The One Ring, a mysterious and powerful artifact with a storied history.</li>
        </ul>
      </Typography>
    </div>
  ),
  actions: [
    {
      ariaLabel: 'Favorite this item',
      iconName: 'favourite',
      onClick: () => {
        alert('Item favorited!');
      },
    },
  ],
};


