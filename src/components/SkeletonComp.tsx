
import { Skeleton, Stack } from '@elsevier/graphene';

function SkeletonComp(): React.ReactElement {


  return (
    <div style={{ background: '#ffffff', padding: 24, display: 'flex', justifyContent: 'center' }}>
      <Stack spacing="16dp">
        {Array.from({ length: 15 }).map((_, i) => (
          <Skeleton
            key={i}
            variant="text"
            width="1050px"
            height="16px"
            className="skeleton-debug"
          />
        ))}
      </Stack>
    </div>
  );
}

export default SkeletonComp;
