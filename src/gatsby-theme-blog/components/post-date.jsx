/** @jsx jsx */
import { jsx } from 'theme-ui';
import { parse, format } from 'date-fns';

const PostDate = ({ children }) => {
  console.log();
  return <small>{format(parse(children, 'MMMM dd, yyyy', new Date()), 'yyyy/MM/dd')}</small>;
};

export default PostDate;
