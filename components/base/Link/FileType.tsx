import _ from 'lodash'
import {getUrlFromSanityFile} from "lib/utils";
import Link from "next/link";
import { LinksInterface } from '.';

interface Props {
  link: LinksInterface
  children: any
}

const FileType: React.FC<Props> = ({ link, children, ...props }) => {
      return (
        <Link
          href={link?.isExternalFile && !_.isEmpty(link?.externalFile) ? link?.externalFile : !_.isEmpty(link?.fileName) ? `${getUrlFromSanityFile(link?.file)}?dl=${link?.fileName}` : `${getUrlFromSanityFile(link?.file)}?dl`}
          {...props}
        >
          {children}
        </Link>
      )
}

export default FileType;

