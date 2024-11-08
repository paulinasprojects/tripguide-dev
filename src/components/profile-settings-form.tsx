'use client';

import { z } from 'zod';
import { TbGenderMale, TbGenderFemale } from "react-icons/tb";
// import { PiCake } from "react-icons/pi";
// import { House, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { profileSchema } from '@/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import {  Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProfileSettingsForm = () => {
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      dateOfBirth: undefined,
      email: "",
      gender: undefined,
      livesIn: "",
      streetAddress: "",
    }
  });

  const onSubmit = async (values: z.infer<typeof profileSchema>) => {
    console.log(values);
    form.reset();
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='mt-10 flex items-center justify-between'>
            <span className='text-headlineFour font-medium font-dm-sans'>Hi I&apos;m Jonathan Doe</span>
            <button className='border-2 border-[#E7ECF3] text-sm font-dm-sans font-medium rounded-[20px] px-4 py-1.5' type='submit'>Edit your Profile</button>
          </div>
          <div className='mt-10 flex gap-[38px]'>
            <FormField
              control={form.control}
              name='livesIn'
              render={({field}) => (
                <FormItem>
                  <FormLabel className='text-md font-bold font-dm-sans text-[#84878B]'>Lives in</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} className='xl:w-[376px] lg:w-[250px] h-[48px] rounded-[10px] bg-[#fafafb]' />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}  
            />
            <FormField
              control={form.control}
              name='streetAddress'
              render={({field}) => (
                <FormItem>
                  <FormLabel className='text-md font-bold font-dm-sans text-[#84878B] '>Street Address</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} className='xl:w-[376px] lg:w-[250px] h-[48px] rounded-[10px] bg-[#fafafb]' />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}  
            />
          </div>
          <div className='mt-[30px]'>
          <FormField
              control={form.control}
              name='email'
              render={({field}) => (
                <FormItem>
                  <FormLabel className='text-md font-bold font-dm-sans text-[#84878B]'>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} className='w-[376px] h-[48px] rounded-[10px] bg-[#fafafb]' />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}  
            />
          </div>
          <div className='mt-10 flex gap-[38px]'>
            <FormField
              control={form.control}
              name='dateOfBirth'
              render={({field}) => (
                <FormItem>
                  <FormLabel className='text-md font-bold font-dm-sans text-[#84878B]'>Date Of Birth</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} className='xl:w-[376px] lg:w-[250px]  h-[48px] rounded-[10px] bg-[#fafafb]' />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}  
            />
            <FormField
              control={form.control}
              name='gender'
              render={({field}) => (
                <FormItem>
                  <FormLabel className='text-md font-bold font-dm-sans text-[#84878B]'>Gender</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                   <SelectTrigger className='xl:w-[376px] lg:w-[250px]  h-[48px] rounded-[10px] outline-none border-none'>
                    <SelectValue placeholder="Select gender"/>
                   </SelectTrigger>
                  </FormControl>
                  <SelectContent className='bg-[#fafafb]'>
                    <SelectItem className='border-none outline-none bg-[#fafafb]' value='Male'>
                      <div className='flex items-center gap-2'>     
                      <TbGenderMale className='size-5'/>
                      Male
                      </div>
                    </SelectItem>
                    <SelectItem className='border-none outline-none bg-[#fafafb]' value='Female'>
                        <div className='flex items-center gap-2'>
                          <TbGenderFemale className='size-5'/>
                          Female
                        </div>
                    </SelectItem>
                  </SelectContent>
                  </Select>
                  <FormMessage/>
                </FormItem>
              )}  
            />
          </div>
        </form>
      </Form>
    </div>
  )
}

export default ProfileSettingsForm