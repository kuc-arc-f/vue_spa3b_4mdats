import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/Home'
import about from '../components/About'

/* dexie */
import DexieTasksTest from '../components/DexieTasks/test'
import DexieTasksTest2 from '../components/DexieTasks/test2'
import DexieTasksTest3 from '../components/DexieTasks/test3'
import DexieTasksTest4 from '../components/DexieTasks/test4'
import DexieTasks from '../components/DexieTasks/Index'
import DexieTasksNew  from '../components/DexieTasks/new'
import DexieTasksShow from '../components/DexieTasks/show'
import DexieTasksEdit from '../components/DexieTasks/edit'
import DexieTasksImport from '../components/DexieTasks/import_task'

/* dexie-todos */
import DexieTodos from '../components/DexieTodos/Index'
import DexieTodosNew from '../components/DexieTodos/new'
import DexieTodosShow from '../components/DexieTodos/show'
import DexieTodosEdit from '../components/DexieTodos/edit'
import DexieTodosImport from '../components/DexieTodos/import_todo'

/* mdats */
import IndexMdats from '../components/IndexMdats/Index'
import IndexMdatsNew from '../components/IndexMdats/new'
import IndexMdatsEdit from '../components/IndexMdats/edit'
import IndexMdatsChat from '../components/IndexMdats/chart'
import IndexMdatsImport from '../components/IndexMdats/import_mdat'
import IndexMdatsSample from '../components/IndexMdats/chart_sample'

//
import FilesTest from '../components/Files/test'
import FilesTest2 from '../components/Files/test2'

Vue.use(Router)
//
export default new Router({
	/* mode: 'history', */
	routes: [
		{ path: '/', component: home },
		{ path: '/about', component: about },
		/* task */
		{ path: '/dexie_tasks/test', component: DexieTasksTest },
		{ path: '/dexie_tasks/test2', component: DexieTasksTest2 },
		{ path: '/dexie_tasks/test3', component: DexieTasksTest3 },
		{ path: '/dexie_tasks/test4', component: DexieTasksTest4 },
		{ path: '/dexie_tasks', component: DexieTasks },
		{ path: '/dexie_tasks/new', component: DexieTasksNew },
		{ path: '/dexie_tasks/show/:id', component: DexieTasksShow },
		{ path: '/dexie_tasks/edit/:id', component: DexieTasksEdit },
		{ path: '/dexie_tasks/import', component: DexieTasksImport },
		/* dexie-todos */
		{ path: '/dexie_todos', component: DexieTodos },
		{ path: '/dexie_todos/new', component: DexieTodosNew },
		{ path: '/dexie_todos/show/:id', component: DexieTodosShow },
		{ path: '/dexie_todos/edit/:id', component: DexieTodosEdit },
		{ path: '/dexie_todos/import', component: DexieTodosImport },
		/* mdat */
		{ path: '/idx_mdat', component: IndexMdats },
		{ path: '/idx_mdat/new', component: IndexMdatsNew },
		{ path: '/idx_mdat/edit/:id', component: IndexMdatsEdit },
		{ path: '/idx_mdat/chart', component: IndexMdatsChat },
		{ path: '/idx_mdat/import', component: IndexMdatsImport },
		{ path: '/idx_mdat/sample', component: IndexMdatsSample },

		/* files */
		{ path: '/files/test', component: FilesTest },
		{ path: '/files/test2', component: FilesTest2 },

	] 
})
