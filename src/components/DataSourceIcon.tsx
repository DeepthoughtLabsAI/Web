import React from 'react';
import {
  Mail,
  FileText,
  FileSpreadsheet,
  Database,
  File,
  FileCode,
  MailPlus,
  MailQuestion,
  Sheet,
  DatabaseZap,
  Circle,
  Square,
  Triangle,
  LucideProps,
} from 'lucide-react';

// A type to ensure we only accept valid icon names
export type IconName =
  | 'Mail'
  | 'FileText'
  | 'FileSpreadsheet'
  | 'Database'
  | 'File'
  | 'FileCode'
  | 'MailPlus'
  | 'MailQuestion'
  | 'Sheet'
  | 'DatabaseZap'
  | 'Circle'
  | 'Square'
  | 'Triangle';

// A map to associate the string name with the actual component
const iconMap: Record<IconName, React.FC<LucideProps>> = {
  Mail,
  FileText,
  FileSpreadsheet,
  Database,
  File,
  FileCode,
  MailPlus,
  MailQuestion,
  Sheet,
  DatabaseZap,
  Circle,
  Square,
  Triangle,
};

interface DataSourceIconProps extends LucideProps {
  name: IconName;
}

const DataSourceIcon: React.FC<DataSourceIconProps> = ({ name, ...props }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return null; // Or a default fallback icon
  }

  return <IconComponent {...props} />;
};

export default DataSourceIcon;
