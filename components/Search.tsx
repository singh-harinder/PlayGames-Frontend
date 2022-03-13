import { resetIdCounter, useCombobox } from "downshift";
import { useRouter } from "next/router";
import debounce from "lodash.debounce";
import { useSearchProductsLazyQuery } from "../types/generated-queries";

function Search() {
  const router = useRouter();
  const [searchProducts, { data, loading, error }] = useSearchProductsLazyQuery({ fetchPolicy: "no-cache" });

  const items = data?.searchTerms || [];
  const findItemsButChill = debounce(searchProducts, 350);
  resetIdCounter();

  const { isOpen, inputValue, getMenuProps, getInputProps, getComboboxProps, getItemProps, highlightedIndex } =
    useCombobox({
      items,
      onInputValueChange() {
        findItemsButChill({ variables: { searchTerm: inputValue } })?.catch(() => {});
      },
      onSelectedItemChange({ selectedItem }) {
        void router.push({
          pathname: `/product/${selectedItem?.id}`,
        });
      },
      itemToString(item) {
        return item?.name || "";
      },
    });

  return (
    <div>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: "search",
            placeholder: "Search for an item",
            id: "search",
            className: loading ? "loading" : "",
          })}
          className="searchfield"
        />
      </div>
      <div {...getMenuProps()}>
        {isOpen
          ? items.map((item, index) => (
              <div
                className="m-2 flex cursor-pointer border-2 border-gray-500 p-2 hover:bg-custombluehover"
                key={item?.id}
                {...getItemProps({ item, index })}
                highlighted={index === highlightedIndex}
              >
                <img src={item?.photo?.image?.publicUrlTransformed || ""} alt={item?.name || ""} width="50" />
                {item?.name}
              </div>
            ))
          : null}
        {isOpen && !items.length && !loading ? <div>Sorry, No items found for {inputValue}</div> : null}
      </div>
    </div>
  );
}

export default Search;
