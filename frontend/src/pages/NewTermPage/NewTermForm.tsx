import z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useHandleFormSubmit} from "@/pages/NewTermPage/hooks.ts";
import {Button} from "@/components/ui/button.tsx";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Link} from "@/components/Link";

export const newTermSchema = z.object({
  raw: z.string().min(1),
  phonetic: z.string().optional(),
  description: z.string().min(1),
  aliases: z.string().optional(),
})

type NewTermFormProps = {
  newTerm?: string
}

export const NewTermForm = ({newTerm}: NewTermFormProps) => {
  const form = useForm<z.infer<typeof newTermSchema>>({
    resolver: zodResolver(newTermSchema),
    defaultValues: {
      raw: newTerm ?? '',
      phonetic: '',
      description: '',
      aliases: '',
    },
  });
  const {save} = useHandleFormSubmit();

  return (
    <Form {...form}>
      <form className="flex flex-col" onSubmit={form.handleSubmit(save)}>
        <FormField control={form.control} name="raw" render={({field}) => (
          <FormItem>
            <FormLabel>Term</FormLabel>
            <FormControl>
              <Input {...field}/>
            </FormControl>
            <FormDescription>
            </FormDescription>
            <FormMessage/>
          </FormItem>
        )}/>
        <FormField control={form.control} name="phonetic" render={({field}) => (
          <FormItem>
            <FormLabel>Phonetic</FormLabel>
            <FormDescription>
              Add the phonetic spelling of the term. e.g: for C# you can add SEE-sharp <Link
              href="https://www.cmu.edu/hub/registrar/docs/phonetic-spelling-instructions.pdf">Click
              for more information</Link>
            </FormDescription>
            <FormControl>
              <Input {...field}/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}/>
        <FormField control={form.control} name="description" render={({field}) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea {...field}  />
            </FormControl>
            <FormDescription>
            </FormDescription>
            <FormMessage/>
          </FormItem>
        )}/>
        <FormField control={form.control} name="aliases" render={({field}) => (
          <FormItem>
            <FormLabel>Aliases</FormLabel>
            <FormDescription>
              Separate your aliases with commas. e.g: for C# you can add C Sharp, C-Sharp, CSharp
            </FormDescription>
            <FormControl>
              <Input {...field}  />
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}/>
        <Button className="mt-4" variant="default" type="submit">Add term</Button>
      </form>
    </Form>
  );
};

