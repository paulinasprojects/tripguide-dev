"use client";

import { z } from 'zod';
import { TbGenderMale, TbGenderFemale } from "react-icons/tb";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { accountInfoSchema } from "@/lib/schemas"
import { Input } from '@/components/ui/input';
import {  Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PersonalInfoForm = () => {
  const form = useForm<z.infer<typeof accountInfoSchema>>({
    resolver: zodResolver(accountInfoSchema),
    defaultValues: {
      address: "",
      dateOfBirth: undefined,
      displayName: "",
      email: "",
      gender: undefined,
      language: undefined,
      phoneNumber: undefined,
      realName: "",
      website: "",
    }
  });

  const onSubmit = async (values: z.infer<typeof accountInfoSchema>) => {
    console.log(values);
    form.reset();
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='flex gap-[24px] max-sm:flex-col'>
            <FormField
              control={form.control}
              name='displayName'
              render={({field}) => (
                <FormItem>
                  <FormLabel className='text-md font-bold font-dm-sans text-[#84878B]'>Display Name</FormLabel>
                  <FormControl>
                    <Input type='text' {...field} className='lg:w-[358px] md:w-[250px] h-[48px] rounded-[10px] bg-[#fafafb]' placeholder='johndoe'/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='realName'
              render={({field}) => (
                <FormItem>
                  <FormLabel className='text-md font-bold font-dm-sans text-[#84878B]'>Real Name</FormLabel>
                  <FormControl>
                    <Input type='text' {...field} className='lg:w-[358px] md:w-[250px] h-[48px] rounded-[10px] bg-[#fafafb]' placeholder='John Doe'/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </div>
          <div className='mt-[24px] flex gap-[24px] max-sm:flex-col'>
          <FormField
              control={form.control}
              name='gender'
              render={({field}) => (
                <FormItem>
                  <FormLabel className='text-md font-bold font-dm-sans text-[#84878B]'>Gender</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                   <SelectTrigger className='lg:w-[358px] md:w-[250px] h-[48px] rounded-[10px]  bg-[#fafafb]'>
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
          <FormField
              control={form.control}
              name='dateOfBirth'
              render={({field}) => (
                <FormItem>
                  <FormLabel className='text-md font-bold font-dm-sans text-[#84878B]'>Date Of Birth</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} className='lg:w-[358px] md:w-[250px] h-[48px] rounded-[10px] bg-[#fafafb]' placeholder='07.12.1995' />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}  
            /> 
          </div>
          <div className='mt-[24px] flex gap-[24px] max-sm:flex-col'>
          <FormField
              control={form.control}
              name='phoneNumber'
              render={({field}) => (
                <FormItem>
                  <FormLabel className='text-md font-bold font-dm-sans text-[#84878B]'>Phone</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} className='lg:w-[358px] md:w-[250px] h-[48px] rounded-[10px] bg-[#fafafb]' placeholder='Phone Number' />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}  
            />
          <FormField
              control={form.control}
              name='email'
              render={({field}) => (
                <FormItem>
                  <FormLabel className='text-md font-bold font-dm-sans text-[#84878B]'>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} className='lg:w-[358px] md:w-[250px] h-[48px] rounded-[10px] bg-[#fafafb]' placeholder='Your Email' />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}  
            />
          </div>
          <div className='mt-[24px] flex gap-[24px] max-sm:flex-col'>
          <FormField
              control={form.control}
              name='address'
              render={({field}) => (
                <FormItem>
                  <FormLabel className='text-md font-bold font-dm-sans text-[#84878B]'>Address</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} className='lg:w-[358px] md:w-[250px] h-[48px] rounded-[10px] bg-[#fafafb]' placeholder='Location' />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}  
            />
              <FormField
              control={form.control}
              name='language'
              render={({field}) => (
                <FormItem>
                  <FormLabel className='text-md font-bold font-dm-sans text-[#84878B]'>Language</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                   <SelectTrigger className='lg:w-[358px] md:w-[250px] h-[48px] rounded-[10px]  bg-[#fafafb]'>
                    <SelectValue placeholder="Select language"/>
                   </SelectTrigger>
                  </FormControl>
                  <SelectContent className='bg-[#fafafb]'>
                    <SelectItem className='border-none outline-none bg-[#fafafb]' value='English'>
                      <span>English</span>
                    </SelectItem>
                    <SelectItem className='border-none outline-none bg-[#fafafb]' value='Bulgarian'>
                       <span>Bulgarian</span>
                    </SelectItem>
                    <SelectItem className='border-none outline-none bg-[#fafafb]' value='German'>
                       <span>German</span>
                    </SelectItem>
                    <SelectItem className='border-none outline-none bg-[#fafafb]' value='French'>
                       <span>French</span>
                    </SelectItem>
                    <SelectItem className='border-none outline-none bg-[#fafafb]' value='Italian'>
                       <span>Italian</span>
                    </SelectItem>
                  </SelectContent>
                  </Select>
                  <FormMessage/>
                </FormItem>
              )}  
            />
          </div>
          <div className='mt-10'>
            <span className='text-headlineFour font-dm-sans font-medium'>Social</span>
          </div>
          <div className='mt-[30px]'>
          <FormField
              control={form.control}
              name='website'
              render={({field}) => (
                <FormItem>
                  <FormLabel className='text-md font-bold font-dm-sans text-[#84878B]'>Website</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} className='lg:w-[358px] md:w-[250px] h-[48px] rounded-[10px] bg-[#fafafb]' placeholder='Your site URL' />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}  
            />
          </div>
          <div className='flex items-center gap-[55px] mt-10'>
            <button className='rounded-[30px] bg-blue100 text-white px-6 py-3 text-md font-bold font-dm-sans hover:bg-black' type='submit'>Update Profile</button>
            <button className='border-none outline-none text-md font-bold font-dm-sans text-[#84878B] hover:text-[#aeaeae]'>Cancel</button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default PersonalInfoForm