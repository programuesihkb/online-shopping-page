import { Box, Typography } from "@mui/material";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';




const CategoriesSidebar = ({ setSelectedCategory, categorySlugs }: { setSelectedCategory: (category: string) => void; categorySlugs: string[] }) => {

  

  // This is a placeholder for the categories. In a real application, you would fetch these from an API or define them statically.
  // const [categories, setCategories] = useState<Category[]>([]);

  // useEffect(() => {
  //   // Fetch categories from the same source products are fetched from
  //   const fetchCategories = async () => {
  //     try {
  //       const res = await fetch('https://dummyjson.com/products/categories');
  //       const data = await res.json();
  //       setCategories(data);
  //     } catch (error) {
  //       console.error('Error fetching categories:', error);
  //     }
  //   };

  //   fetchCategories();
  // }, []);


  const handleCategoryClick = (slug: string) => {
    setSelectedCategory(slug);
  };

  return (
    <Box sx={{ 
        minHeight: 352, 
        minWidth: 200,
        mt: 6,
        pl: 2,
    }}>
          <SimpleTreeView sx={{
            '& .MuiTreeItem-root': {
              transition: 'primary-main 0.3s ease',
            },
          }}>
            <Typography variant="h6" sx={{ mb: 1, ml: 1, color: 'text.primary', fontWeight: 'bold' }}>
              Categories
            </Typography>
            {categorySlugs.map((slug) => {
              const readable = slug
                .replace(/[-_]/g, ' ')
                .replace(/\b\w/g, (m) => m.toUpperCase());
              return (
                <TreeItem
                  key={slug}
                  itemId={slug}
                  label={`> ${readable}`}
                  onClick={() => handleCategoryClick(slug)}
                  sx={{
                    '& .MuiTreeItem-content:hover': {
                      backgroundColor: 'primary.main',
                      cursor: 'pointer',
                    },
                    '& .MuiTreeItem-content[data-selected]': {
                      backgroundColor: 'secondary.main',
                      color: '#fff',
                    },
                    '& .MuiTreeItem-content[data-selected]:hover, & .MuiTreeItem-content[data-selected][data-focused]': {
                      backgroundColor: 'secondary.main',
                      color: '#fff',
                    },
                    ml:-2,
                    my: 0.5,
                  }}
                />
              );
            })}
          </SimpleTreeView>
        </Box>
  );
};

export default CategoriesSidebar;

