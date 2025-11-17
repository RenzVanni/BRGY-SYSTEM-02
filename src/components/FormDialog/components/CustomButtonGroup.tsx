import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import React from 'react';

type CustomButtonGroupType = {
  btnFor: 'editOfficial' | 'editResident' | 'editAccount';
  isPending: boolean;
};

const CustomButtonGroup = (prop: CustomButtonGroupType) => {
  const { btnFor, isPending } = prop;
  return (
    <div className="flex items-center justify-end gap-3">
      <Button
        // disabled={pending}
        variant="outline"
        className="w-fit">
        Delete
      </Button>
      {btnFor != 'editAccount' && (
        <Button
          // disabled={pending}
          variant="outline"
          className="w-fit cursor-pointer">
          View
        </Button>
      )}

      {isPending ? (
        <Button disabled variant="outline" className="w-fit">
          <Loader2 className="animate-spin" />
          Save...
        </Button>
      ) : (
        <Button type="submit" variant="outline" className="w-fit cursor-pointer">
          Save
        </Button>
      )}
    </div>
  );
};

export default CustomButtonGroup;
