
import { Skeleton, Stack } from '@elsevier/graphene';

function SkeletonComp(): React.ReactElement {
  return (
    <Stack spacing="16dp">
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} variant="text" width="450px" height="16px" />
      ))}
    </Stack>
  );
}

export default SkeletonComp;
