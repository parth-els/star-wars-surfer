import { Inline, InteractiveCard, Link, Stack, Typography } from "@elsevier/graphene";
  
const TestComp = () => {
    // your code here
    return (
        <div>
          <Stack spacing="24dp">
  <Typography>
    The component supports 2 sizes.{' '}
    <br />
    <code>
      small | medium
    </code>
  </Typography>
  <Inline
    spacing="24dp"
    wrap
  >
    <InteractiveCard
      heading="Title"
      id="test-card"
      onCardClick={() => {}}
      onSelectedChange={() => {}}
      preHeading="InteractiveCard"
      size="small"
      subHeading="Size: small"
      variant="selectable-highlight"
    >
      <Stack spacing="12dp">
        <Typography
          as="p"
          color="color-text-secondary"
          fontSize={14}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Typography>
        <Link
          href="#test"
          label="Graphene Link Component"
        />
      </Stack>
    </InteractiveCard>
    <InteractiveCard
      heading="Title"
      id="test-card"
      onCardClick={() => {}}
      onSelectedChange={() => {}}
      preHeading="InteractiveCard"
      size="medium"
      subHeading="Size: medium"
      variant="selectable-highlight"
    >
      <Stack spacing="12dp">
        <Typography
          as="p"
          color="color-text-secondary"
          fontSize={14}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Typography>
        <Link
          href="#test"
          label="Graphene Link Component"
        />
      </Stack>
    </InteractiveCard>
  </Inline>
</Stack>
        </div>
    );
};

export default TestComp;
