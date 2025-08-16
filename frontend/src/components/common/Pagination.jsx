import React from 'react';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  itemsPerPage = 10, 
  totalItems = 0,
  className = "" 
}) => {
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  if (totalPages <= 1) return null;

  return (
    <div className={`flex items-center justify-between px-4 py-3 bg-white border-t border-slate-200 sm:px-6 ${className}`}>
      <div className="flex justify-between flex-1 sm:hidden">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          variant="outline"
          size="sm"
        >
          Previous
        </Button>
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          variant="outline"
          size="sm"
        >
          Next
        </Button>
      </div>
      
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-700">
            Showing{' '}
            <span className="font-medium">{startItem}</span>
            {' '}to{' '}
            <span className="font-medium">{endItem}</span>
            {' '}of{' '}
            <span className="font-medium">{totalItems}</span>
            {' '}results
          </p>
        </div>
        
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
            {/* First page */}
            <Button
              onClick={() => onPageChange(1)}
              disabled={currentPage === 1}
              variant="outline"
              size="sm"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="sr-only">First</span>
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            
            {/* Previous page */}
            <Button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              variant="outline"
              size="sm"
              className="relative inline-flex items-center px-2 py-2 border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {/* Page numbers */}
            {generatePageNumbers().map((page, index) => (
              page === '...' ? (
                <span
                  key={`ellipsis-${index}`}
                  className="relative inline-flex items-center px-4 py-2 border border-slate-300 bg-white text-sm font-medium text-slate-700"
                >
                  ...
                </span>
              ) : (
                <Button
                  key={page}
                  onClick={() => onPageChange(page)}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                    currentPage === page
                      ? 'z-10 bg-emerald-600 border-emerald-600 text-white'
                      : 'border-slate-300 bg-white text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  {page}
                </Button>
              )
            ))}
            
            {/* Next page */}
            <Button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              variant="outline"
              size="sm"
              className="relative inline-flex items-center px-2 py-2 border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="sr-only">Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
            
            {/* Last page */}
            <Button
              onClick={() => onPageChange(totalPages)}
              disabled={currentPage === totalPages}
              variant="outline"
              size="sm"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="sr-only">Last</span>
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;