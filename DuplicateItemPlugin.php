<?php 

class DuplicateItemPlugin extends Omeka_Plugin_AbstractPlugin
{
    protected $_hooks = array(
      'admin_head'
    );

    /**
     * Queue javascript files when admin section loads
     *
     *@return void
     */
    public function hookAdminHead()
    {
      $request = Zend_Controller_Front::getInstance()->getRequest();
      $controller = $request->getControllerName();
      $action = $request->getActionName();
      if ($controller == 'items') {
        if ($action == 'browse') {            
            queue_js_file('duplicate');
        } elseif ($action == 'show') {
            queue_js_file('duplicate-button');
        }
      } elseif ($controller == 'index' && $action == 'index') {
			queue_js_string("duplicate-indexlinks');
      }
    }

}
