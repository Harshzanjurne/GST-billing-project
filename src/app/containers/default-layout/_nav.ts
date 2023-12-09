import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Sales Managment',
    url: '/sales-managment',
    iconComponent: { name: 'cilNotes' },
    children: [
      {
        name: 'Sales Invoice',
        url: '/sales-managment/sales-invoice'
      },
      {
        name: 'Payment Edition',
        url: '/sales-managment/payment-edition'
      },
      {
        name: 'Non GST Invoice',
        url: '/sales-managment/non-gst-invoice'
      },
      {
        name: 'Non GST Payment Edition',
        url: '/sales-managment/non-gst-payment-edition'
      },
      {
        name: 'Delivery Challan',
        url: '/sales-managment/delivery-challan'
      },
      {
        name: 'Quotation',
        url: '/sales-managment/quotation'
      },
      {
        name: 'Add City',
        url: '/sales-managment/add-city'
      },
      
    ]
  },
  {
    name: 'Purchase Managment',
    url: '/purchase-managment',
    iconComponent: { name: 'cilBookmark' },
    children: [
      {
        name: 'Purchase Order',
        url: '/purchase-managment/purchase-order'
      },
      {
        name: 'Purchase Invoice',
        url: '/purchase-managment/purchase-invoice'
      },
      {
        name: 'Purchase Payment Edition',
        url: '/purchase-managment/purchase-payment-edition'
      },
       
    ]
  },
  {
    name: 'Customer Managment',
    url: '/customer-managment',
    iconComponent: { name: 'cilUser' },
    children: [
      {
        name: 'Customer',
        url: '/customer-managment/customer'
      },
      {
        name: 'Import Customer',
        url: '/customer-managment/importcustomer'
      },
      
    ]
  },
  {
    name: 'Supplier Managment',
    url: '/supplier-managment',
    iconComponent: { name: 'cilPeople' },
    children: [
      {
        name: 'Supplier',
        url: '/supplier-managment/supplier'
      },
      {
        name: ' import Suppliers',
        url: '/supplier-managment/importsuppliers'
      },
      
    ]
  },
  {
    name: 'Item Managment',
    url: '/item-managment',
    iconComponent: { name: 'cilPencil' },
    children: [
      {
        name: 'category',
        url: '/item-managment/category'
      },
      {
        name: 'items',
        url: '/item-managment/items'
      },
      
    ]
  },
  {
    name: 'Report Managment',
    url: '/report-managment',
    iconComponent: { name: 'cilPaperclip' },
    children: [
      {
        name: 'Sales Report',
        url: '/report-managment/sales-report'
      },
      {
        name: 'Non GST Sales Report',
        url: '/report-managment/non-gst-sales-report'
      },
      {
        name:  'Stock Report',
        url: '/report-managment/stock-report'
      },
      {
        name: 'B2B GST Report',
        url: '/report-managment/b2b-gst-report'
      },
      {
        name: 'B2B JSON GST Report',
        url: '/report-managment/b2b-json-gst-report'
      },
      {
        name: 'B2CL GST Report',
        url: '/report-managment/b2cl-gst-report'
      },
      {
        name: 'B2CS GST Report',
        url: '/report-managment/b2cs-gst-report'
      },
      {
        name: 'Purchase Report',
        url: '/report-managment/purchase-report'
      },
      
    ]
  },





  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Components',
    title: true
  },
  {
    name: 'Base',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Accordion',
        url: '/base/accordion'
      },
      {
        name: 'Breadcrumbs',
        url: '/base/breadcrumbs'
      },
      {
        name: 'Cards',
        url: '/base/cards'
      },
      {
        name: 'Carousel',
        url: '/base/carousel'
      },
      {
        name: 'Collapse',
        url: '/base/collapse'
      },
      {
        name: 'List Group',
        url: '/base/list-group'
      },
      {
        name: 'Navs & Tabs',
        url: '/base/navs'
      },
      {
        name: 'Pagination',
        url: '/base/pagination'
      },
      {
        name: 'Placeholder',
        url: '/base/placeholder'
      },
      {
        name: 'Popovers',
        url: '/base/popovers'
      },
      {
        name: 'Progress',
        url: '/base/progress'
      },
      {
        name: 'Spinners',
        url: '/base/spinners'
      },
      {
        name: 'Tables',
        url: '/base/tables'
      },
      {
        name: 'Tabs',
        url: '/base/tabs'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons'
      },
      {
        name: 'Button groups',
        url: '/buttons/button-groups'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns'
      }
    ]
  },
  {
    name: 'Forms',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Form Control',
        url: '/forms/form-control'
      },
      {
        name: 'Select',
        url: '/forms/select'
      },
      {
        name: 'Checks & Radios',
        url: '/forms/checks-radios'
      },
      {
        name: 'Range',
        url: '/forms/range'
      },
      {
        name: 'Input Group',
        url: '/forms/input-group'
      },
      {
        name: 'Floating Labels',
        url: '/forms/floating-labels'
      },
      {
        name: 'Layout',
        url: '/forms/layout'
      },
      {
        name: 'Validation',
        url: '/forms/validation'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    iconComponent: { name: 'cil-chart-pie' }
  },
  {
    name: 'Icons',
    iconComponent: { name: 'cil-star' },
    url: '/icons',
    children: [
      {
        name: 'CoreUI Free',
        url: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'FREE'
        }
      },
      {
        name: 'CoreUI Flags',
        url: '/icons/flags'
      },
      {
        name: 'CoreUI Brands',
        url: '/icons/brands'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts'
      },
      {
        name: 'Badges',
        url: '/notifications/badges'
      },
      {
        name: 'Modal',
        url: '/notifications/modal'
      },
      {
        name: 'Toast',
        url: '/notifications/toasts'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  },
  {
    title: true,
    name: 'Links',
    class: 'py-0'
  },
  {
    name: 'Docs',
    url: 'https://coreui.io/angular/docs/templates/installation',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank', class: '-text-dark' },
    class: 'mt-auto'
  },
  {
    name: 'Try CoreUI PRO',
    url: 'https://coreui.io/product/angular-dashboard-template/',
    iconComponent: { name: 'cil-layers' },
    attributes: { target: '_blank' }
  }
];
