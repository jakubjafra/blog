/** @jsx jsx */
import { jsx } from 'theme-ui';
import { parse, format } from 'date-fns';

const PostDate = ({ children }) => {
  return <small>{format(parse(children, 'MMMM dd, yyyy', new Date()), 'yyyy/MM/dd')}</small>;
};

export default PostDate;
