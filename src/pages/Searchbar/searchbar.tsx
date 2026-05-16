/***************Search Main Component******************
 * File : searchbar.tsx
 * Author : Sivaprakash Raman
 * Version : 0.0.1
 * Common component : Custom Search
 * Release : 0.0.1
 * Ticket : 1
*/
import { useState, useEffect } from 'react';
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import { useApi } from "../../hooks/useApi";

interface PostItem {
  id: number;
  title: string;
}

export default function SearchComponent() {

    //For Search Component
    const [customData, setCustomData] = useState<PostItem[]>([]);
    const [originalData, setOriginalData] = useState<PostItem[]>([]);
    const [searchInput, setSearchInput] = useState("");

    const { data, error, loading, fetchData } = useApi<PostItem[]>();

    //Component inital Effect
    useEffect(() => {
        fetchData('https://jsonplaceholder.typicode.com/posts?_limit=20');
    }, [fetchData]);

    useEffect(() => {
      if (data) {
        setCustomData(data);
        setOriginalData(data);
      }
    }, [data]);

    useEffect(() => {
      if (error) {
        console.error(error);
      }
    }, [error]);

    const clearAction = () => {
        setSearchInput("");
        setCustomData(originalData);
    }

    //Custom Filter Function
    //it will occur While Input Changes
    useEffect(()=> {

        if(originalData && originalData.length) {
            if(searchInput) {
                const filterData = originalData.filter((data:{ title: string })=>data.title.toLowerCase().includes(searchInput.toLowerCase()));
                setCustomData(filterData);
            }
            if(searchInput == "") {
                setCustomData(originalData);
            }
        }

    }, [searchInput]);

  return (
    <>
      <PageMeta
        title="React SearchBar"
        description="This is React.js SearchBar component for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="SearchBar" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <div className="space-y-6">
            <section id="center">
                <div className="space-y-3">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none dark:bg-dark-900 dark:border-gray-700 dark:text-white"
                    />
                    <button onClick={()=>clearAction()} className="custom-btn">
                        Clear
                    </button>
                </div>
                {loading && <p className="text-sm text-gray-500 dark:text-gray-400">Loading results…</p>}
                {error && <p className="text-sm text-red-600 dark:text-red-400">Error: {error}</p>}
                {
                    customData && customData.length > 0 && 

                    <ul style={{marginTop: '20px', listStyleType: 'auto', marginLeft: '20px'}} className="space-y-2 center">
                        {
                        customData.map((list:{ id: number; title: string }) => <li key={list.id} className="text-gray-600 dark:text-gray-400">{list.title}</li>)
                        }
                    </ul>
                }
                <br />
                {
                    customData && customData.length == 0 && 

                    <span className="text-gray-600 dark:text-gray-400">No Record Found</span>
                }
            </section>
        </div>
      </div>
    </>
  );
}
