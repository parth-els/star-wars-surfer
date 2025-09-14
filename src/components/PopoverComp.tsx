import { Popover, Inline, WidgetPlaceholderLegacy, Button, Link } from '@elsevier/graphene';

  export function PopoverComp() {
    return (
      <Inline spacing={'8dp'}>
       <Popover
              trigger={<Button variant={'primary'} label={'Buttons'} />}
              title={'The title'}
              description={'This is the description'}
              primaryButton={<Button variant={'primary'} label={'Primary button'} />}
              secondaryButton={<Button variant={'secondary'} label={'Secondary button'} />}
              titleID={'example-2button-popover-title'}
       />
       <Popover
              trigger={<Button variant={'primary'} label={'Links'} />}
              title={'The title'}
              description={'This is the description'}
              link={<Link label={'Link'} />}
              secondLink={<Link label={'Second link'} />}
              titleID={'example-1button-popover-title'}
       />
       <Popover
              trigger={<Button variant={'primary'} label={'Placeholder'} />}
              title={'The title'}
              description={'This is the description'}
              placeholder={<WidgetPlaceholderLegacy>Placeholder</WidgetPlaceholderLegacy>}
              titleID={'example-widget-popover-title'}
       />
       <Popover
              trigger={<Button variant={'primary'} label={'All options'} />}
              title={'The title'}
              description={'This is the description'}
              primaryButton={<Button variant={'primary'} label={'Primary button'} />}
              secondaryButton={<Button variant={'secondary'} label={'Secondary button'} />}
              link={<Link label={'Link'} />}
              secondLink={<Link label={'Second link'} />}
              placeholder={<WidgetPlaceholderLegacy>Placeholder</WidgetPlaceholderLegacy>}
              titleID={'example-full-popover-title'}
       />
      </Inline>
    );
  }