import {ChangeEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSearchTerms} from '@/domains/terms/hooks.ts';
import {useDebouncedValue} from '@/hooks/useDebouncedValue.ts';
import {Clock} from '../../shared/Icons/Clock';
import {Search} from '../../shared/Icons/Search';
import {TermSearchOpenRow, TermSearchResult,} from './TermSearch.styled';
import {useCombineSearches, useRecentSearches} from './hooks';
import {Button} from "@/components/ui/button.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem} from '../ui/form';
import {Input} from "@/components/ui/input.tsx";
import z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

export type TermSearchResult = {
  term: string;
  isRecent: boolean;
};

const termSearchSchema = z.object({
  search: z.string().min(1)
})

export const TermSearch = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useDebouncedValue('');
    const form = useForm<z.infer<typeof termSearchSchema>>({
      resolver: zodResolver(termSearchSchema),
      defaultValues: {
        search: ''
      }
    });
    const navigate = useNavigate();
    const [isDirty, setIsDirty] = useState(false);

    const handleSearchInputChange = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
      setIsDirty(true);
      setIsOpen(value.length > 0);
      setSearchTerm(value);
    };

    const handleSearchSubmit = (values: z.infer<typeof termSearchSchema>) => {
      if (!isDirty) {
        return;
      }

      const searchInput = values.search;
      if (searchInput === '') {
        return;
      }
      saveSearch(searchInput);
      navigate(`/search?term=${searchInput}`);
    };

    const {data} = useSearchTerms({term: searchTerm});
    const {recentSearches, saveSearch, removeSearch} = useRecentSearches(searchTerm);
    const combinedSearches = useCombineSearches(recentSearches, data?.terms || []);

    const isNotLastTerm = (index: number) => index !== combinedSearches.length - 1;

    return (
      <Form {...form}>
        <form
          className="flex flex-col items-center border-1 border-black rounded-xl bg-white px-4 p-2 text-black "
          onSubmit={form.handleSubmit(handleSearchSubmit)}>
          <div className="flex flex-row items-center w-full gap-4">
            <Search color="#000"/>
            <div className="flex-1 h-full w-full">
              <FormField
                control={form.control}
                name="search"
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <Input className="p-0 m-0 border-none text-base"
                             placeholder="Search for a term..." {...field} onChange={(event) => {
                        field.onChange(event);
                        handleSearchInputChange(event)
                      }}/>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Search</Button>
          </div>
          {isOpen && (
            <>
              <Separator className="my-1"/>
              {combinedSearches.map(({term, isRecent}, index) => (
                <>
                  <div className="flex items-center self-stretch">
                    {isRecent ? <Clock color="#000" className="mr-2"/> : <Search color="#000"/>}
                    <TermSearchOpenRow key={term} className="flex-1">
                      <TermSearchResult to={`/search?term=${term}`}>{term}</TermSearchResult>
                    </TermSearchOpenRow>
                    {isRecent && (
                      <Button variant="ghost" type="button" onClick={() => removeSearch(term)}
                              className="text-xs">
                        remove
                      </Button>
                    )}
                  </div>
                  {isNotLastTerm(index) && <Separator className="my-1"/>
                  }
                </>
              ))}
            </>
          )}
        </form>
      </Form>
    )
  }
;

