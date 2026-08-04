import { motion } from 'framer-motion'

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-semibold">Portfolio scaffold ready</h1>
      </motion.div>
    </main>
  )
}

export default App
