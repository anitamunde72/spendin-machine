/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ArrowDownUp, RefreshCcw, Wallet, Trophy, Crown, ArrowRightLeft, ShoppingBag } from 'lucide-react';
import { items, categories } from './data';
import { Inventory } from './types';

const INITIAL_BALANCE = 1000000000; // 100 Crore INR

const formatINR = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

const AdUnitPlaceholder = ({ position }: { position: 'Top' | 'Bottom' }) => (
  <div className="w-full max-w-7xl mx-auto px-4 py-4 sm:py-6">
    <div className="w-full mx-auto min-h-[90px] bg-slate-900/40 border border-slate-800/80 rounded-xl flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-sm group border-dashed">
      <span className="text-[10px] uppercase tracking-widest font-mono text-slate-500 absolute top-2 left-3 opacity-50">Advertisement</span>
      <div className="py-4 text-center">
        <p className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors">AdMob / AdSense Space ({position})</p>
        <p className="text-xs text-slate-500 mt-1">Insert your responsive ad script here</p>
      </div>
    </div>
  </div>
);

export default function App() {
  const [balance, setBalance] = useState<number>(INITIAL_BALANCE);
  const [inventory, setInventory] = useState<Inventory>({});
  
  // Filtering & Sorting State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState<'none' | 'asc' | 'desc'>('none');

  // Load from LocalStorage on mount
  useEffect(() => {
    const savedInventory = localStorage.getItem('spend_rupees_inventory');
    const savedBalance = localStorage.getItem('spend_rupees_balance');
    
    if (savedInventory && savedBalance) {
      setInventory(JSON.parse(savedInventory));
      setBalance(Number(savedBalance));
    }
  }, []);

  // Save to LocalStorage on change
  useEffect(() => {
    localStorage.setItem('spend_rupees_inventory', JSON.stringify(inventory));
    localStorage.setItem('spend_rupees_balance', balance.toString());
  }, [inventory, balance]);

  // Derived computations
  const totalSpent = INITIAL_BALANCE - balance;
  
  const purchasedItems = useMemo(() => {
    return items
      .filter((item) => inventory[item.id] > 0)
      .map((item) => ({ ...item, quantity: inventory[item.id] }));
  }, [inventory]);

  const totalItemsCount = purchasedItems.reduce((acc, item) => acc + item.quantity, 0);

  // Actions
  const handleBuy = (targetId: string, price: number) => {
    if (balance >= price) {
      setBalance((prev) => prev - price);
      setInventory((prev) => ({
        ...prev,
        [targetId]: (prev[targetId] || 0) + 1,
      }));
    }
  };

  const handleSell = (targetId: string, price: number) => {
    if (inventory[targetId] > 0) {
      setBalance((prev) => prev + price);
      setInventory((prev) => {
        const currentQty = prev[targetId];
        if (currentQty === 1) {
          const newInv = { ...prev };
          delete newInv[targetId];
          return newInv;
        }
        return {
          ...prev,
          [targetId]: currentQty - 1,
        };
      });
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all progress?')) {
      setBalance(INITIAL_BALANCE);
      setInventory({});
      localStorage.removeItem('spend_rupees_inventory');
      localStorage.removeItem('spend_rupees_balance');
    }
  };

  // Process items for display
  const displayItems = useMemo(() => {
    let filtered = items.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    if (sortOrder === 'asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortOrder]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header with Balance */}
      <header className="sticky top-0 z-50 glass-panel border-b border-white/5 border-t-0 border-l-0 border-r-0">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
            <Crown className="w-8 h-8 text-emerald-400" />
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-200">
              Spend Unlimited Rupees
            </h1>
          </div>
          
          <div className="flex flex-col items-center">
            <p className="text-sm text-slate-400 font-medium tracking-wide uppercase mb-1">Your Net Worth</p>
            <motion.div 
              key={balance}
              initial={{ scale: 1.1, color: '#10b981' }}
              animate={{ scale: 1, color: '#ffffff' }}
              className="text-4xl sm:text-5xl font-bold font-mono tracking-tighter"
            >
              {formatINR(balance)}
            </motion.div>
          </div>
        </div>
      </header>

      {/* Top Ad Unit Placeholder */}
      <AdUnitPlaceholder position="Top" />

      {/* Main Layout */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* Left Side: Shop */}
        <div className="flex-1 min-w-0 flex flex-col gap-8">
          
          {/* Controls: Search & Filters */}
          <section className="glass-panel rounded-2xl p-4 sm:p-6 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search pure luxury..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950/50 border border-slate-700/50 rounded-xl pl-10 pr-4 py-3 placeholder-slate-500 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-sans"
                />
              </div>
              <button
                onClick={() => setSortOrder(curr => curr === 'desc' ? 'asc' : curr === 'asc' ? 'none' : 'desc')}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/50 rounded-xl transition-colors font-medium whitespace-nowrap"
              >
                <ArrowDownUp className="w-4 h-4 text-emerald-400" />
                Sort: {sortOrder === 'none' ? 'Default' : sortOrder === 'asc' ? 'Price: Low' : 'Price: High'}
              </button>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                      : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 pb-24 lg:pb-0">
            <AnimatePresence>
              {displayItems.map((item) => {
                const qty = inventory[item.id] || 0;
                const canAfford = balance >= item.price;

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    key={item.id}
                    className="glass-panel overflow-hidden rounded-2xl flex flex-col group relative"
                  >
                    {qty > 0 && (
                      <div className="absolute top-4 right-4 z-10 bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                        Owned <span className="font-mono">{qty}</span>
                      </div>
                    )}
                    
                    <div className="h-48 sm:h-56 relative overflow-hidden bg-slate-950">
                      <div className="absolute inset-0 bg-slate-900 animate-pulse" /> {/* Placeholder while loading */}
                      <img 
                        src={item.imageUrl} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 relative z-10"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                    </div>
                    
                    <div className="p-5 flex flex-col flex-1 gap-4">
                      <div>
                        <p className="text-xs text-emerald-400/80 font-medium uppercase tracking-wider mb-1">{item.category}</p>
                        <h3 className="font-bold text-lg leading-tight text-white mb-2">{item.name}</h3>
                        <p className="font-mono text-xl text-teal-300">{formatINR(item.price)}</p>
                      </div>

                      <div className="mt-auto grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                        <button
                          onClick={() => handleSell(item.id, item.price)}
                          disabled={qty === 0}
                          className="py-2.5 rounded-lg font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed bg-slate-800 hover:bg-slate-700 text-rose-400 border border-slate-700 hover:border-slate-600 disabled:hover:bg-slate-800 disabled:hover:border-slate-700"
                        >
                          Sell
                        </button>
                        <button
                          onClick={() => handleBuy(item.id, item.price)}
                          disabled={!canAfford}
                          className={`py-2.5 rounded-lg font-bold transition-all ${
                            canAfford 
                              ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]'
                              : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                          }`}
                        >
                          Buy
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            
            {displayItems.length === 0 && (
               <div className="col-span-full py-20 text-center text-slate-500 glass-panel rounded-2xl">
                 No items found matching your filters.
               </div>
            )}
          </div>
        </div>

        {/* Right Side / Bottom: Receipt Panel */}
        <aside className="w-full lg:w-96 shrink-0 z-30">
          <div className="glass-panel p-6 rounded-2xl sticky top-[8.5rem] flex flex-col max-h-[calc(100vh-10rem)]">
            
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Wallet className="w-5 h-5 text-emerald-400" />
                Receipt
              </h2>
              <button 
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 px-3 py-1.5 rounded-md transition-colors"
              >
                <RefreshCcw className="w-3.5 h-3.5" /> Reset
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 -mr-2 mb-6 space-y-4">
              {purchasedItems.length === 0 ? (
                <div className="text-center text-slate-500 py-10 flex flex-col items-center gap-3">
                  <ShoppingBag className="w-10 h-10 opacity-20" />
                  <p>No purchases yet.<br/>Start spending!</p>
                </div>
              ) : (
                purchasedItems.map(item => (
                  <div key={item.id} className="flex flex-col gap-1 text-sm bg-slate-900/50 p-3 rounded-xl border border-slate-800/50">
                    <div className="flex justify-between font-medium text-slate-200">
                      <span className="line-clamp-1 mr-2">{item.name}</span>
                      <span className="font-mono shrink-0">x{item.quantity}</span>
                    </div>
                    <div className="flex justify-between text-slate-400/80 font-mono text-xs">
                      <span>{formatINR(item.price)}</span>
                      <span className="text-emerald-400/70">{formatINR(item.price * item.quantity)}</span>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-4 shrink-0">
              <div className="flex justify-between items-center text-sm font-medium text-slate-400">
                <span>Items Owned</span>
                <span className="font-mono text-slate-200">{totalItemsCount}</span>
              </div>
              <div className="flex justify-between items-center font-bold text-lg border-t border-white/5 pt-4">
                <span className="text-slate-300">Total Spent</span>
                <span className="font-mono text-rose-400">{formatINR(totalSpent)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Remaining</span>
                <span className="font-mono text-emerald-500/80">{formatINR(balance)}</span>
              </div>
            </div>

          </div>
        </aside>

      </main>

      {/* Bottom Ad Unit Placeholder */}
      <AdUnitPlaceholder position="Bottom" />

      {/* Footer */}
      <footer className="mt-auto border-t border-white/5 bg-slate-950/80 backdrop-blur-md py-6 text-center text-slate-500 text-sm font-medium">
        <p>This web is developed by <span className="text-emerald-400/80 font-bold tracking-wide">SHIVAM MUNDE</span></p>
      </footer>
    </div>
  );
}

