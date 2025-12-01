import React from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import CustomButtonGroup from './components/CustomButtonGroup';
import { Input } from '../ui/input';
import CustomFile from './components/CustomFile';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import CustomInput from './components/CustomInput';
import { useContextTheme } from '@/hooks/hooks';
import { CreateResidentHeader, EditResidentHeader } from './components/CustomHeader';
import { CheckedState } from '@radix-ui/react-checkbox';
import { apiRequestPartHooks } from '@/hooks/useApiHooks';
import CustomSelect from './components/CustomSelect';
import { OfficialsType } from '@/types/officialsType';
import { officialsPositionData } from '@/data/officialsPosition';
import { FieldDescription, FieldGroup, FieldLegend, FieldSet } from '../ui/field';
import { onSearchHook } from '@/hooks/customHooks';
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '../ui/command';
import { useOpenChange } from '@/hooks/useOpenChangeHook';

const CreateOfficialsFormDialog = () => {
  const { isFormDialog, residentData, setResidentData, setOfficialsData, officialsData } = useContextTheme();
  const { isOpen, dialogBoxType } = isFormDialog;

  const { id, resident, term_start, term_end, position, imgurl } = officialsData;

  const { handleOpenChange } = useOpenChange();

  const { officialRequestPartHook, isPending } = apiRequestPartHooks();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    officialRequestPartHook();
  };

  const { setSearchData, refetch, data: search } = onSearchHook();
  const handleRefetch = (param: string) => {
    setSearchData((prev) => ({ ...prev, name: param }));
    refetch();
  };
  return (
    <Dialog
      open={dialogBoxType == 'createOfficial'}
      onOpenChange={(open) =>
        handleOpenChange({
          isOpen: open,
          type: 'officials'
        })
      }>
      <DialogContent className="pt-12 lg:!max-w-[1000px] lg:!w-[1000px] lg:flex" aria-describedby="">
        <CreateResidentHeader />

        <form onSubmit={handleSubmit} className="lg:flex gap-12 w-full">
          <div>
            <Command className="border-none bg-transparent">
              <CommandInput placeholder="Search resident..." onValueChange={(e) => handleRefetch(e)} />
              <CommandList className="h-[200px] overflow-y-scroll">
                <CommandEmpty>No results found</CommandEmpty>
                {search?.pages?.map((item) =>
                  item?.data?.map((resident: any) => (
                    <CommandItem
                      key={resident.id}
                      onSelect={() => {
                        setResidentData(resident);
                        setOfficialsData((prev) => ({ ...prev, resident: resident }));
                      }}
                      className="cursor-pointer">
                      {resident.fullname}
                    </CommandItem>
                  ))
                )}
              </CommandList>
            </Command>
          </div>
          <div className="grid gap-4">
            <CustomInput
              label="Name"
              name="fullname"
              placeholder="Search resident..."
              value={residentData?.fullname}
              type="text"
              isDisabled={true}
            />
            <CustomSelect<OfficialsType>
              label="Position"
              name="position"
              placeholder="Select Position"
              value={position}
              data={officialsPositionData}
              setData={setOfficialsData}
            />

            <CustomInput label="Term Start" name="term_start" value={term_start} type="date" />

            <CustomInput label="Term End" name="term_end" value={term_end} type="date" />

            <CustomFile setOfficialsData={setOfficialsData} />
            <Input type="hidden" name="resident_id" value={resident?.id} />

            <CustomButtonGroup isPending={isPending} />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateOfficialsFormDialog;
