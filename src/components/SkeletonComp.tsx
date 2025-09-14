
import { Skeleton, Stack } from '@elsevier/graphene';

function SkeletonComp(): React.ReactElement {
  return (
    <>
    Skeleton~
    
       <Stack spacing="16dp">
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className='' variant="text" width="450px" height="16px" />
        
      ))}
    </Stack>

    </>
 
  );
}

export default SkeletonComp;
