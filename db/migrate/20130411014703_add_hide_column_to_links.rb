class AddHideColumnToLinks < ActiveRecord::Migration
  def change
  	add_column :links, :hide, :boolean, :default => "false" 
  end
end
